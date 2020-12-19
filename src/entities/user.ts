import BaseEntity from './base';
import { accountType } from '../db/types/account';

class User extends BaseEntity {
    public id: string = '';
    public email: string = '';
    public accountType = accountType.User;
    public createdAt: number = Math.ceil(new Date().getTime() / 1000);
    public updatedAt: number = Math.ceil(new Date().getTime() / 1000);
    public deletedAt: number = Math.ceil(new Date().getTime() / 1000);

    public async getOne(_id: string): Promise<User> {
        const user = await this.db.query('SELECT id, email, accountType, createdAt, updatedAt, deletedAt FROM users WHERE id = ?', [_id])
            .catch(e => {
                throw this.EError.NotFound(_id);
            })
        const [id, email, accountType, createdAt, updatedAt, deletedAt] = user.rows[0];
        this.id = id;
        this.email = email;
        this.accountType = accountType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        return this;
    }

    public async getAll(): Promise<{ users: User[], metadata: { offset: number, total: number }> {
        const users = await this.db.query('SELECT id, email, accountType, createdAt, updatedAt, deletedAt from users')
    }

    public async create(user: Pick<User, 'email' | 'accountType'>): Promise<User> {
        const query = {
            text: 'INSERT INTO users(email, accountType) VALUES($1, $2',
            values: [user.email, user.accountType],
        };

        const createdUser = await this.db.query(query).catch(e => {
            throw this.EError.UnableToCreate(user);
        });

    }

    public async update(): Promise<User> {}

    public async delete(): Promise<User> {}
}