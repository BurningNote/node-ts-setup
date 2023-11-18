import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";
import sequelize from "../../../storageHandlers/database.handler";

export interface UserAttributes {
    userid?: number;
    username?: string;
    email?: string;
    mobile?: number;
    designation?: string;
    created_at?: Date;
    updated_at?: Date;
}

@Table({ tableName: "user", timestamps: true, updatedAt:'updated_at', createdAt:'created_at' })
export class User extends Model<UserAttributes, UserAttributes> implements UserAttributes {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.MEDIUMINT })
    @Index({ name: "PRIMARY", using: "BTREE", order: "ASC", unique: true })
    userid?: number;
    @Column({ allowNull: true, type: DataType.STRING(100) })
    username?: string;
    @Column({ allowNull: true, type: DataType.STRING(100) })
    email?: string;
    @Column({ allowNull: true, type: DataType.BIGINT })
    mobile?: number;
    @Column({ allowNull: true, type: DataType.STRING(100) })
    designation?: string;
    @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
    created_at?: Date;
    @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
    updated_at?: Date;
}

sequelize.addModels([User]);