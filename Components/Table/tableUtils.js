function getTooltipTimeData(taskArray, filterBy) {
    return taskArray.filter((task) => task.resourceQueue === filterBy).map((task) => {
        return { assignee: task.assignee.name, timeRemaining: task.timeProps.timeRemaining, needsEstimate: task.timeProps.needsEstimate };
    });
}

export { getTooltipTimeData };
