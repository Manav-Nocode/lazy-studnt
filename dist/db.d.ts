import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    password?: string | null;
    email?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    password?: string | null;
    email?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    password?: string | null;
    email?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password?: string | null;
    email?: string | null;
}, mongoose.Document<unknown, {}, {
    password?: string | null;
    email?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    password?: string | null;
    email?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        password?: string | null;
        email?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        password?: string | null;
        email?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    password?: string | null;
    email?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    password?: string | null;
    email?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map