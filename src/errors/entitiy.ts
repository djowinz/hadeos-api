export default class EntityError {
    public UnableToCreate(record: Record<any, any>): string {
        const reason = `Unable to create user with ${JSON.stringify(record)}`;
        console.error(reason);
        return reason;
    }
    public NotFound(id: string): string {
        const reason = `Entity ${id} does not exist`
        console.error(reason);
        return reason;
    }
}