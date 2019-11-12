export default class TimeInStatusState {
    loadedDate: Date;
    issueId: string;
    updateStateData: (value: React.SetStateAction<TimeInStatusState>) => void;

    constructor(updateStateData: (value: React.SetStateAction<TimeInStatusState>) => void) {
        this.updateStateData = updateStateData;
        this.loadedDate = new Date();
    }

    updateTimeInStatus = ({ issueId, timeInStatus }: { [key: string]: string }): void => {
        this.updateStateData((prevState: TimeInStatusState) => {
            return {
                ...prevState,
                [issueId]: timeInStatus
            };
        });
    };

    clearTimeInStatus = (): void => {
        this.updateStateData((prevState: TimeInStatusState) => {
            return new TimeInStatusState(prevState.updateStateData);
        });
    };
}
