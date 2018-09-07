/*
API ENDPOINT

'/plugins/servlet/applinks/proxy?appId=8da36fe0-de48-3afa-aae3-970436460c88&path=https%3A%2F%2Flampstrack.lampsplus.com%3A8443%2Frest%2Fapi%2F2%2Fsearch?' +
            encodeURIComponent('jql=' + encodeURIComponent(search_string) + '&maxResults=1000'
*/
/* eslint-disable */
function loadScript(url, callback, scope) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (script.readyState) {
        //IE
        script.onreadystatechange = function() {
            if (script.readyState == 'loaded' || script.readyState == 'complete') {
                script.onreadystatechange = null;
                callback(scope);
            }
        };
    } else {
        //Others
        script.onload = function() {
            callback(scope);
        };
    }
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
}

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}

var lpTimeRemaining = {
    config: {
        scripts: [
            'https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.25.8/js/jquery.tablesorter.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js'
        ]
    },
    init: function(a) {
        // a = {}
        lpTimeRemaining
            .updateConfig(a)
            .loadStyles()
            .getScriptsAsync()
            .displayPlugin();
    },
    updateConfig: function(a) {
        // Unused dead code
        var scope = this;
        //extend config object
        return scope;
    },
    getScriptsAsync: function() {
        var scope = this;
        scope.loadedScriptsCount = 0;
        scope.config.scripts.forEach(function(e, i, a) {
            loadScript(e, scope.countScriptLoaded, scope);
        });
        return scope;
    },
    countScriptLoaded: function(scope) {
        scope.loadedScriptsCount++;
        return scope;
    },
    ensureAllScriptsLoadedThenRender: function() {
        var scope = this;
        var allScriptsLoaded = setInterval(function() {
            if (scope.loadedScriptsCount >= scope.config.scripts.length) {
                clearInterval(allScriptsLoaded);
                scope.displayResults(scope);
            }
        }, 100);
        return scope;
    },
    displayPlugin: function() {
        var scope = this;
        scope
            .printEmptyForm()
            .addFormSubmissionHandling()
            .runQueryIfSearchExists();
        return scope;
    },
    displayResults: function(scope) {
        if (scope.rawJqlResponse) {
            if (scope.resourcesSelected) {
                scope
                    .parseJqlResponseResources()
                    .prepareDisplayArrayResources()
                    .displayResultsResources()
                    .loadPlugins();
            } else {
                scope
                    .parseJqlResponseInitiatives()
                    .prepareDisplayArrayInitiatives()
                    .displayResultsInitiatives()
                    .loadPlugins();
            }
        }
        return scope;
    },
    loadStyles: function() {
        jQuery('body').append('<style>' + this.styles + '</style>');
        return this;
    },
    printEmptyForm: function() {
        jQuery('.wiki-content').after(
            '\
            <div class="lpTimeRemaining">\
              <input id="lpTimeRemainingInput" type="text" placeholder="Search via JQL">\
            </div>'
        );
        return this;
    },
    runQueryIfSearchExists: function() {
        // Looks like if there is a jql query string it will load it and run the search on page load.
        var search = '';
        var grouper = 0;
        if (window.location.hash) {
            var queryArray = window.location.hash.split('&');
            if (queryArray[0].indexOf('jql=') > -1) {
                search = queryArray[0].split('jql=')[1] || '';
                search = decodeURIComponent(search);
            }
            if (queryArray[1] && queryArray[1].indexOf('group=') > -1) {
                grouper = queryArray[1].split('group=')[1] || 0;
                grouper = parseInt(decodeURIComponent(grouper));
            }
        } else if (storageAvailable('localStorage')) {
            search = localStorage.lpTimeRemainingQuery || '';
            grouper = localStorage.lpTimeRemainingGroup || 0;
        }
        this.resourcesSelected = grouper;
        if (search.length) {
            var e = jQuery.Event('keypress');
            e.which = 13;
            jQuery('#lpTimeRemainingInput')
                .val(search)
                .trigger(e);
        }
        return this;
    },
    addFormSubmissionHandling: function() {
        var scope = this;

        jQuery('.lpTimeRemaining').on('click', '.grouperColumn', function() {
            scope.resourcesSelected = scope.resourcesSelected ? 0 : 1;
            jQuery('.lpTimeRemaining *')
                .not('input, .switch, label')
                .remove();

            var queryArray = window.location.hash.split('&');

            if (queryArray.length > 1) {
                queryArray[1] = 'group=' + scope.resourcesSelected;
                window.location.hash = queryArray.join('&');
            }

            scope.displayResults(scope);
        });

        jQuery('.lpTimeRemaining input').on('keypress', function(e) {
            if (e.which == 13) {
                lpTimeRemaining.rawJqlResponse = null;
                var search_string = jQuery(this).val();
                jQuery('.lpTimeRemaining *')
                    .not('input, .switch, label')
                    .remove();
                jQuery(this).after('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
                jQuery.ajax(
                    '/plugins/servlet/applinks/proxy?appId=8da36fe0-de48-3afa-aae3-970436460c88&path=https%3A%2F%2Flampstrack.lampsplus.com%3A8443%2Frest%2Fapi%2F2%2Fsearch?' +
                        encodeURIComponent('jql=' + encodeURIComponent(search_string) + '&maxResults=1000'),
                    {
                        success: function(res) {
                            console.log(res);
                            jQuery('.lpTimeRemaining .spinner').remove();
                            if (jQuery('.lpTimeRemaining table').length) {return;}
                            if (storageAvailable('localStorage')) {
                                localStorage.lpTimeRemainingQuery = search_string;
                            }
                            if (storageAvailable('localStorage')) {
                                localStorage.lpTimeRemainingGroup = lpTimeRemaining.resourcesSelected;
                            }
                            window.location.hash = 'jql=' + encodeURIComponent(search_string) + '&group=' + parseInt(lpTimeRemaining.resourcesSelected);
                            lpTimeRemaining.rawJqlResponse = res;
                            lpTimeRemaining.ensureAllScriptsLoadedThenRender();
                        },
                        error: function(err) {
                            jQuery('.lpTimeRemaining .spinner').remove();
                            console.log(err);
                            try {
                                var errorObj = err && err.responseText ? JSON.parse(err.responseText) : err;
                                var error =
                                    errorObj.errorMessages && Array.isArray(errorObj.errorMessages) ?
                                        errorObj.errorMessages.join('\n') :
                                        JSON.stringify(errorObj);
                                alert(error);
                            } catch (ee) {
                                alert('Bad Request: Please check your query and try again');
                            }
                        }
                    }
                );
            }
        });
        return this;
    },

    parseJqlResponseResources: function() {
        var scope = this;
        var data = lpTimeRemaining.rawJqlResponse;
        var h = {
            resources: {},
            initiatives: {},
            totalHours: 0
        };

        jQuery.each(data.issues, function(i, value) {
            var key = value.key;
            var isSubtask = value.fields && value.fields.parent ? 1 : 0;
            var parentKey = isSubtask ? value.fields.parent.key : (parentKey = value.key);
            var assignee = value.fields.assignee || { displayName: 'Unassigned' };
            var resource =
                value.fields && value.fields.customfield_10050 && value.fields.customfield_10050.value ? value.fields.customfield_10050.value : 'None';
            var remainingTime = 0;
            var summary = value.fields.summary || parentKey;
            var hasEstimate = 1;
            var status = value.fields.status.name;
            var task = {};
            if (value.fields && value.fields.timeestimate !== null) {
                remainingTime = value.fields.timeestimate / 3600;
            } else {
                hasEstimate = 0;
            }
            task = {
                key: key,
                resource: resource,
                assignee: assignee.displayName,
                totalHours: remainingTime,
                totalHoursPretty: scope.printHoursPretty(remainingTime),
                summary: summary,
                needsEstimate: !hasEstimate,
                status: status
            };

            h.assignees = h.assignees || {};
            h.assignees[assignee.displayName] = h.assignees[assignee.displayName] || {};
            h.assignees[assignee.displayName].tasks = h.assignees[assignee.displayName].tasks || [];
            h.assignees[assignee.displayName].tasks.push(task); // Pushes tasks for Assignee View
            h.assignees[assignee.displayName].totalHours = h.assignees[assignee.displayName].totalHours || 0;
            h.assignees[assignee.displayName].totalHours += remainingTime;
            h.assignees[assignee.displayName].resources = h.assignees[assignee.displayName].resources || {};
            h.assignees[assignee.displayName].resources[resource] = h.assignees[assignee.displayName].resources[resource] || {};
            h.assignees[assignee.displayName].resources[resource].totalHours = h.assignees[assignee.displayName].resources[resource].totalHours || 0;
            h.assignees[assignee.displayName].resources[resource].totalHours += remainingTime;
            h.assignees[assignee.displayName].resources[resource].needsEstimate = h.assignees[assignee.displayName].resources[resource].needsEstimate || 0;
            h.assignees[assignee.displayName].resources[resource].needsEstimate =
                h.assignees[assignee.displayName].resources[resource].needsEstimate || !hasEstimate ? 1 : 0;
            h.totalHours += remainingTime;
            h.resources[resource] = h.resources[resource] || {};
            h.resources[resource].totalHours = h.resources[resource].totalHours || 0;
            h.resources[resource].totalHours += remainingTime;
        });

        scope.parsedJqlResponseResources = h;
        return scope;
    },

    prepareDisplayArrayResources: function() {
        var data = this.parsedJqlResponseResources;
        var resources = data.resources;
        var assignees = data.assignees;
        var resourceArray = [];
        var tableArray = [];
        var count = 1;
        for (var p in resources) {
            var rsrc = {
                resource: p,
                totalHours: resources[p].totalHours,
                totalHoursPretty: this.printHoursPretty(resources[p].totalHours)
            };
            resourceArray.push(rsrc);
        }

        // Resources are JIRA resources EX: None, Architect, Back End, DBA, Front End, QA, etc.
        resourceArray.sort(function(a, b) {
            if (a.resource == 'None') {
                return -1;
            } else if (b.resource == 'None') {
                return 1;
            } else if (a.resource < b.resource) {return -1;} else if (a.resource > b.resource) {return 1;}
            return 0;
        });

        for (var k in assignees) {
            var assignee = {
                count: count,
                assignee: k,
                totalHours: assignees[k].totalHours,
                totalHoursPretty: this.printHoursPretty(assignees[k].totalHours),
                resources: [],
                tasks: assignees[k].tasks
            };
            count++;

            for (var t in assignees[k].tasks) {
                assignees[k].tasks[t].taskHours = [];
                for (var p in resourceArray) {
                    var time;
                    if (assignees[k].tasks[t] && assignees[k].tasks[t].resource && assignees[k].tasks[t].resource == resourceArray[p].resource) {
                        time = this.printHoursPretty(assignees[k].tasks[t].totalHours);
                    } else {
                        time = '';
                    }
                    assignees[k].tasks[t].taskHours.push(time);
                }
            }
            for (var p in resourceArray) {
                var time;
                var needsEstimate;
                var prettyTime;
                if (assignees[k].resources && assignees[k].resources[resourceArray[p].resource]) {
                    time = assignees[k].resources[resourceArray[p].resource].totalHours;
                    needsEstimate = assignees[k].resources[resourceArray[p].resource].needsEstimate || 0;
                } else {
                    time = '';
                    needsEstimate = 0;
                }
                prettyTime = time === '' ? '' : this.printHoursPretty(time);
                assignee.resources.push({
                    resourceQueue: p,
                    totalHours: time,
                    totalHoursPretty: prettyTime,
                    needsEstimate: needsEstimate
                });
            }
            tableArray.push(assignee);
        }
        tableArray.sort(function(a, b) {
            if (a.assignee == 'Unassigned') {
                return -1;
            } else if (b.assignee == 'Unassigned') {
                return 1;
            } else if (a.assignee < b.assignee) {return -1;} else if (a.assignee > b.assignee) {return 1;}
            return 0;
        });
        this.displayDataResources = {
            assignees: tableArray,
            resources: resourceArray,
            totalHours: data.totalHours,
            totalHoursPretty: this.printHoursPretty(data.totalHours)
        };
        return this;
    },
    displayResultsResources: function() {
        var scope = this;
        var d = scope.displayDataResources;
        var html = scope.buildHtmlResources(d);
        jQuery('.lpTimeRemaining').append(html.table);
        return this;
    },
    buildHtmlResources: function(d) {
        if (!d.resources || !d) {return false;}
        var t =
            '<table class="persist-area">\
                <thead>\
                  <tr class="persist-header">\
                    <th>#</th>\
                    <th class="grouperColumn" data-sorter="false"><span>Assignee</span> / <span class="greyColor">Initiative</span></th>\
                    <th>Status<span class="sortArrow"></span></th>\
                    <th>Total Remaining Time<span class="sortArrow"></span></th>\
                    {{#each resources}}\
                      <th>{{this.resource}}<span class="sortArrow"></span></th>\
                    {{/each}}\
                  </tr>\
                </thead>\
                <tbody>\
                  {{#each assignees}}\
                    <tr>\
                      <td><a href="#" class="toggle">{{this.count}}</a></td>\
                      <td>{{this.assignee}}</td>\
                      <td></td>\
                      <td data-text="{{this.totalHours}}">{{this.totalHoursPretty}}</td>\
                      {{#each this.resources}}\
                        <td data-text="{{this.totalHours}}" data-c="{{@index}}" class="{{#if this.needsEstimate}}needsEstimate{{/if}}">\
                          {{this.totalHoursPretty}}\
                        </td>\
                      {{/each}}\
                    </tr>\
                    {{#each this.tasks}}\
                      <tr class="tablesorter-childRow">\
                        <td></td>\
                        <td><a href="https://lampstrack.lampsplus.com:8443/browse/{{this.key}}">{{this.summary}}</a></td>\
                        <td>{{this.status}}</td>\
                        <td></td>\
                        {{#each this.taskHours}}\
                          <td class="{{#if ../this.needsEstimate}}redColor{{/if}}">{{this}}</td>\
                        {{/each}}\
                      </tr>\
                    {{/each}}\
                  {{/each}}\
                </tbody>\
                <tfoot>\
                  <tr>\
                    <td></td>\
                    <td></td>\
                    <td></td>\
                    <td>{{totalHoursPretty}}</td>\
                    {{#each resources}}\
                      <td>{{this.totalHoursPretty}}</td>\
                    {{/each}}\
                  </tr>\
                </tfoot>\
              </table>';
        var template = Handlebars.compile(t);
        var html = template(d);
        return {
            table: html
        };
    },
    // What does this one do?
    // INITIATIVE VIEW DATA
    parseJqlResponseInitiatives: function() {
        var scope = this;
        var data = scope.rawJqlResponse;
        var h = {
            resources: {},
            initiatives: {},
            totalHours: 0
        };
        jQuery.each(data.issues, function(i, v) {
            var key = v.key;
            var isSubtask = v.fields && v.fields.parent ? 1 : 0;
            var parentKey = isSubtask ? v.fields.parent.key : v.key;
            var assignee = v.fields.assignee || { displayName: 'Unassigned' };
            var resource = v.fields && v.fields.customfield_10050 && v.fields.customfield_10050.value ? v.fields.customfield_10050.value : 'None';
            var remainingTime = 0;
            var summary = v.fields.summary || parentKey;
            var hasEstimate = 1;
            var status = v.fields.status.name;
            var task = {};
            if (v.fields && v.fields.timeestimate !== null) {
                remainingTime = v.fields.timeestimate / 3600;
            } else {
                hasEstimate = 0;
            }
            h.resourceQueue = h.initiatives[parentKey] = h.initiatives[parentKey] || {};
            h.initiatives[parentKey].status = isSubtask ? v.fields.parent.fields.status.name : v.fields.status.name;

            h.initiatives[parentKey].url = 'https://lampstrack.lampsplus.com:8443/browse/' + parentKey;

            h.initiatives[parentKey].summary = h.initiatives[parentKey].summary || '';
            h.initiatives[parentKey].summary = isSubtask ? v.fields.parent.fields.summary : summary;

            h.initiatives[parentKey].totalHours = h.initiatives[parentKey].totalHours || 0;
            h.initiatives[parentKey].totalHours += remainingTime;

            h.initiatives[parentKey].resources = h.initiatives[parentKey].resources || {};
            h.initiatives[parentKey].resources[resource] = h.initiatives[parentKey].resources[resource] || {};
            h.initiatives[parentKey].resources[resource].totalHours = h.initiatives[parentKey].resources[resource].totalHours || 0;
            h.initiatives[parentKey].resources[resource].totalHours += remainingTime;

            h.initiatives[parentKey].resources[resource].needsEstimate = h.initiatives[parentKey].resources[resource].needsEstimate || 0;

            h.initiatives[parentKey].resources[resource].needsEstimate = h.initiatives[parentKey].resources[resource].needsEstimate ? 1 : !hasEstimate;

            h.initiatives[parentKey].needsEstimate = h.initiatives[parentKey].needsEstimate || 0;
            h.initiatives[parentKey].needsEstimate = h.initiatives[parentKey].needsEstimate ? 1 : !hasEstimate;

            h.initiatives[parentKey].resources[resource].assignees = h.initiatives[parentKey].resources[resource].assignees || {};
            h.initiatives[parentKey].resources[resource].assignees[assignee.displayName] =
                h.initiatives[parentKey].resources[resource].assignees[assignee.displayName] || 0;
            h.initiatives[parentKey].resources[resource].assignees[assignee.displayName] += remainingTime;
            h.resources[resource] = h.resources[resource] || 0;
            h.resources[resource] += remainingTime;
            h.totalHours += remainingTime;
            h.initiatives[parentKey].tasks = h.initiatives[parentKey].tasks || [];

            task = {
                key: key,
                resource: resource,
                assignee: assignee.displayName,
                totalHours: remainingTime,
                totalHoursPretty: scope.printHoursPretty(remainingTime),
                summary: summary,
                needsEstimate: !hasEstimate,
                status: status
            };

            if (key == parentKey) {
                h.initiatives[parentKey].tasks.unshift(task);
            } else {
                h.initiatives[parentKey].tasks.push(task);
            }
        });
        scope.parsedJqlResponseInitiatives = h;
        return scope;
    },

    prepareDisplayArrayInitiatives: function() {
        var d = this.parsedJqlResponseInitiatives;
        var r = d.resources;
        var i = d.initiatives;
        var resourceArray = [];
        var tableArray = [];
        var count = 1;
        console.log(r);
        for (var p in r) {
            var rsrc = {
                resource: p,
                totalHours: r[p],
                totalHoursPretty: this.printHoursPretty(r[p])
            };
            resourceArray.push(rsrc);
        }
        resourceArray.sort(function(a, b) {
            if (a.resource == 'None') {
                return -1;
            } else if (b.resource == 'None') {
                return 1;
            } else if (a.resource < b.resource) {return -1;} else if (a.resource > b.resource) {return 1;}
            return 0;
        });
        console.log(resourceArray);
        for (var k in i) {
            var initiative = {
                count: count,
                key: k,
                status: i[k].status,
                summary: i[k].summary,
                totalHours: i[k].totalHours,
                totalHoursPretty: this.printHoursPretty(i[k].totalHours),
                resources: [],
                tasks: i[k].tasks
            };
            count++;
            for (var t in i[k].tasks) {
                i[k].tasks[t].taskHours = [];
                for (var p in resourceArray) {
                    var time =
                        i[k].tasks[t] && i[k].tasks[t].resource && i[k].tasks[t].resource == resourceArray[p].resource ? i[k].tasks[t].totalHoursPretty : '';
                    i[k].tasks[t].taskHours.push(time);
                }
            }
            for (var p in resourceArray) {
                var time;
                var needsEstimate;
                var prettyTime;
                var assignees = [];
                if (i[k].resources && i[k].resources[resourceArray[p].resource]) {
                    time = i[k].resources[resourceArray[p].resource].totalHours;
                    needsEstimate = i[k].resources[resourceArray[p].resource].needsEstimate || 0;
                    if (i[k].resources[resourceArray[p].resource].assignees) {
                        for (var a in i[k].resources[resourceArray[p].resource].assignees) {
                            assignees.push({
                                name: a,
                                totalHours: i[k].resources[resourceArray[p].resource].assignees[a],
                                totalHoursPretty: this.printHoursPretty(i[k].resources[resourceArray[p].resource].assignees[a])
                            });
                        }
                    }
                } else {
                    time = '';
                    needsEstimate = 0;
                }
                prettyTime = time === '' ? '' : this.printHoursPretty(time);
                initiative.resources.push({
                    totalHours: time,
                    totalHoursPretty: prettyTime,
                    needsEstimate: needsEstimate,
                    assignees: assignees
                });
            }
            tableArray.push(initiative);
        }
        tableArray.sort(function(a, b) {
            if (a.summary < b.summary) {return -1;} else if (a.summary > b.summary) {return 1;}
            return 0;
        });
        this.displayDataInitiatives = {
            initiatives: tableArray,
            resources: resourceArray,
            totalHours: d.totalHours,
            totalHoursPretty: this.printHoursPretty(d.totalHours)
        };
        return this;
    },
    displayResultsInitiatives: function() {
        var scope = this;
        var d = scope.displayDataInitiatives;
        var html = scope.buildHtmlInitiatives(d);
        jQuery('.lpTimeRemaining').append(html.table);
        return this;
    },
    buildHtmlInitiatives: function(d) {
        if (!d.resources || !d) {return false;}
        var t =
            '<table class="persist-area">\
                <thead>\
                  <tr class="persist-header">\
                    <th>#</th>\
                    <th class="grouperColumn" data-sorter="false"><span class="greyColor">Assignee</span> / <span>Initiative</span></th>\
                    <th>Status<span class="sortArrow"></span></th>\
                    <th>Total Remaining Time<span class="sortArrow"></span></th>\
                    {{#each resources}}\
                      <th>{{this.resource}}<span class="sortArrow"></span></th>\
                    {{/each}}\
                  </tr>\
                </thead>\
                <tbody>\
                  {{#each initiatives}}\
                    <tr>\
                      <td><a href="#" class="toggle">{{this.count}}</a></td>\
                      <td><a href="https://lampstrack.lampsplus.com:8443/browse/{{this.key}}">{{this.summary}}</a></td>\
                      <td>{{this.status}}</td>\
                      <td data-text="{{this.totalHours}}">{{this.totalHoursPretty}}</td>\
                      {{#each this.resources}}\
                        <td data-text="{{this.totalHours}}" data-c="{{@index}}" class="{{#if this.needsEstimate}}needsEstimate{{/if}}">\
                          <span class="toolTTrigger">{{this.totalHoursPretty}}</span>\
                          <span class="toolTContent assignees" style="display: none;">\
                              {{#each this.assignees}}\
                              <span class="assignee">\
                                  <span class="assigneeHours">{{this.totalHoursPretty}}</span>\
                                  <span class="assigneeName">{{this.name}}</span>\
                              </span>\
                              {{/each}}\
                          </span>\
                        </td>\
                      {{/each}}\
                    </tr>\
                    {{#each this.tasks}}\
                      <tr class="tablesorter-childRow">\
                        <td></td>\
                        <td><a href="https://lampstrack.lampsplus.com:8443/browse/{{this.key}}">{{this.summary}}</a></td>\
                        <td>{{this.status}}</td>\
                        <td></td>\
                        {{#each this.taskHours}}\
                          <td class="{{#if ../this.needsEstimate}}redColor{{/if}}">{{this}}</td>\
                        {{/each}}\
                      </tr>\
                    {{/each}}\
                  {{/each}}\
                </tbody>\
                <tfoot>\
                  <tr>\
                    <td></td>\
                    <td></td>\
                    <td></td>\
                    <td>{{totalHoursPretty}}</td>\
                    {{#each resources}}\
                      <td>{{this.totalHoursPretty}}</td>\
                    {{/each}}\
                  </tr>\
                </tfoot>\
              </table>';
        var template = Handlebars.compile(t);
        var html = template(d);
        return {
            table: html
        };
    },
    printHoursPretty: function(h) {
        var hours = Math.floor(h) || 0;
        var minutes = Math.floor(((h * 3600) % 3600) / 60) || 0;
        var prettyTime = (hours > 0 ? hours + 'h' : '') + (minutes > 0 ? ' ' + minutes + 'm' : '');
        return prettyTime || '0h';
    },
    loadPlugins: function() {
        //TOOLTIPS
        jQuery('.lpTimeRemaining .toolTContent').hide();
        jQuery('.lpTimeRemaining').on('mouseenter', '.toolTTrigger, .toolTContent', function() {
            var $this = jQuery(this);
            $this
                .parent()
                .children('.toolTContent')
                .show();
        });
        jQuery('.lpTimeRemaining').on('mouseleave', '.toolTTrigger, .toolTContent', function() {
            var $this = jQuery(this);
            $this
                .parent()
                .children('.toolTContent')
                .hide();
        });
        //SORTABLE COLUMNS
        if (jQuery().tablesorter) {
            // add custom numbering widget
            jQuery.tablesorter.addWidget({
                id: 'numbering',
                format: function(table) {
                    var c = table.config;
                    $('tr:visible', table.tBodies[0])
                        .not('.tablesorter-childRow')
                        .each(function(i) {
                            $(this)
                                .removeClass('greyRow')
                                .find('td')
                                .eq(0)
                                .find('a')
                                .text(i + 1);
                        })
                        .filter(':odd')
                        .each(function() {
                            $(this).addClass('greyRow');
                        });
                }
            });
            //call tablesorter plugin
            jQuery('.lpTimeRemaining table').tablesorter({
                // prevent first column from being sortable
                headers: {
                    0: { sorter: false }
                },
                // apply custom widget
                widgets: ['numbering', 'group'],
                widgetOptions: {
                    group_collapsible: true,
                    group_collapsed: true
                }
            });
            $('.tablesorter-childRow td').hide();
            $('.tablesorter').on('click', '.toggle', function() {
                $(this)
                    .closest('tr')
                    .nextUntil('tr:not(.tablesorter-childRow)')
                    .find('td')
                    .toggle();
                return false;
            });
        }
        var $clonedHeaderRow;
        var $targetHeaderRow;
        var $target_children;
        jQuery('.lpTimeRemaining .persist-area').each(function() {
            $targetHeaderRow = jQuery('.persist-header', this);
            $target_children = $targetHeaderRow.children();
            $clonedHeaderRow = $targetHeaderRow.clone();
            $clonedHeaderRow
                .addClass('floatingHeader')
                .children()
                .width(function(i, val) {
                    return $target_children.eq(i).width();
                });
            $targetHeaderRow.before($clonedHeaderRow).css('width', $clonedHeaderRow.width());
        });
        jQuery(window)
            .scroll(lpTimeRemaining.updateTableHeaders)
            .trigger('scroll');
    },
    updateTableHeaders: function() {
        jQuery('.lpTimeRemaining .persist-area').each(function() {
            var $el = jQuery(this),
                offset = $el.offset(),
                scrollTop = jQuery(window).scrollTop(),
                $floatingHeader = jQuery('.floatingHeader', this);
            if (scrollTop > offset.top && scrollTop < offset.top + $el.height()) {
                $floatingHeader.css({
                    visibility: 'visible'
                });
            } else {
                $floatingHeader.css({
                    visibility: 'hidden'
                });
            }
        });
    },
    styles:
        '.lpTimeRemaining { clear: both; position: relative; z-index: 99; line-height: 1; } \
              .lpTimeRemaining input[type="text"] { font-size:18px; padding:10px 10px 10px 5px; display:block; width:100%; border:none; border-bottom:1px solid #757575; } \
              .lpTimeRemaining table { width: 100%; display: table; border: none; border-collapse: collapse; border-spacing: 0; background-color: #fff; } \
              .lpTimeRemaining thead { border-bottom: 1px solid #d0d0d0; }  \
              .lpTimeRemaining .grouperColumn { width:40%; }\
              .lpTimeRemaining .greyColor { color: #aaa; }\
              .lpTimeRemaining tr.greyRow { \
                background: #f2f2f2; \
              } \
              .lpTimeRemaining tr.tablesorter-childRow { \
                background: #e2e2e2; \
              } \
              .lpTimeRemaining tr.tablesorter-childRow { \
                border-top: 1px solid #ccc; \
              } \
               .lpTimeRemaining tr.tablesorter-childRow + tr.tablesorter-childRow { \
                border: none; \
              } \
              .lpTimeRemaining th { background: white; padding: 15px 5px; display: table-cell; text-align: left; vertical-align: middle; border-radius: 2px; } \
              .lpTimeRemaining th .sortArrow { width: 8px; float: right; margin-top: 3px; height: 8px; border: none; } \
              .lpTimeRemaining th.tablesorter-headerAsc .sortArrow { width: 0; height: 0; border-style: solid; border-width: 0 4px 8px 4px; border-color: transparent transparent #333 transparent; } \
              .lpTimeRemaining th.tablesorter-headerDesc .sortArrow { width: 0; height: 0; border-style: solid; border-width: 8px 4px 0 4px; border-color: #333 transparent transparent transparent; } \
              .lpTimeRemaining td { padding: 15px 5px; display: table-cell; text-align: left; vertical-align: middle; } \
              .lpTimeRemaining td.needsEstimate { color: #D8000C; background-color: #FFBABA; } \
              .lpTimeRemaining td.redColor { color: #D8000C; } \
              .lpTimeRemaining tfoot td { font-weight: bold; } \
              .lpTimeRemaining .floatingHeader { position: fixed; top: 40px; visibility: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); transition: all 0.2s ease-in-out; } \
              .lpTimeRemaining .toolTContent { margin-left: -50px; -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.2);  box-shadow: 0 3px 6px rgba(0,0,0,.2);  background: #fff;  padding: 20px;  position: absolute; display: inline-block; z-index: 99; border: 1px solid rgba(100,100,100,.1); } \
              .lpTimeRemaining .toolTContent .assignee { display: block; } \
              .lpTimeRemaining .toolTContent .assignee + .assignee { padding-top: 6px; } \
              .lpTimeRemaining span.field { \
                display: inline-block; \
                margin: 1em 1em; \
              } \
              .spinner { \
                margin: 10px auto 0; \
                width: 70px; \
                text-align: center; \
              } \
              .spinner > div { \
                width: 18px; \
                height: 18px; \
                background-color: #333; \
                border-radius: 100%; \
                display: inline-block; \
                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both; \
                 animation: sk-bouncedelay 1.4s infinite ease-in-out both; \
              } \
              .spinner .bounce1 { \
                -webkit-animation-delay: -0.32s; \
                animation-delay: -0.32s; \
              } \
              .spinner .bounce2 {  \
                -webkit-animation-delay: -0.16s;  \
                animation-delay: -0.16s;  \
              } \
              @-webkit-keyframes sk-bouncedelay {  \
                0%, 80%, 100% { -webkit-transform: scale(0) }  \
                40% { -webkit-transform: scale(1.0) }  \
              }  \
              @keyframes sk-bouncedelay {  \
                0%, 80%, 100% {  \
                  -webkit-transform: scale(0);  \
                  transform: scale(0);  \
                } 40% {  \
                  -webkit-transform: scale(1.0);  \
                  transform: scale(1.0);  \
                }  \
              }\
              .lpTimeRemaining .switch { display: none; }'
};
lpTimeRemaining.init({});
