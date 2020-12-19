import { Pool } from "pg";
import db from '../db';
import EntityError from '../errors/entitiy';

export default class BaseEntity {
    public db: Pool = db;
    public EError: EntityError = new EntityError(); 
}