// import { ApolloError } from 'apollo-server';
// import firestore from './database';
// import { WhereFilterOp } from '@google-cloud/firestore';

// const getCollectionEntity = async (collection: string, id: string) => {
//     const entity = await firestore.collection(collection).doc(id).get();
//     if (entity.exists) {
//         return Promise.resolve(Object.assign(entity.data(), { id: entity.id }));
//     }
//     return Promise.resolve(null);
// }

// const getCollectionEntities = async (collection: string, whereQuery: string[] = []) => {
//     const entityArray: any[] = [];
//     let entityQuery = firestore.collection(collection);
//     let users;
//     if (whereQuery.length > 0) {
//         users = await entityQuery.where(whereQuery[0], whereQuery[1] as WhereFilterOp, whereQuery[2]).get();
//     } else {
//         users = await entityQuery.get();
//     }
//     if (!users.empty) {
//         users.forEach(u => {
//             entityArray.push(Object.assign(u.data(), { id: u.id }));
//         });
//     }
//     return Promise.resolve(entityArray);
// }

// export default {
//     Query: {
//         user: async (_parent: any, args: { id: string }): Promise<any> => {
//             const user = await getCollectionEntity('users', args.id);
//             if (user) {
//                 return user;
//             }
//             throw new ApolloError('User not found', '404');
//         },
//         users: async (): Promise<any> => getCollectionEntities('users'),
//         admins: async (): Promise<any> => getCollectionEntities('users', ['accountType', '==', 'Admin']),
//         device: async (_parent: any, args: { id: string }): Promise<any> => {
//             const device = await getCollectionEntity('devices', args.id);
//             if (device) {
//                 return device;
//             }
//             throw new ApolloError('Device not found', '404');
//         },
//         devices: async (_parent: any, args: { ownerId: string }): Promise<any> => getCollectionEntities('devices', ['ownerId', '==', args.ownerId]),
//         script: async (_parent: any, args: { id: string }): Promise<any> => {
//             const script = await getCollectionEntity('scripts', args.id);
//             if (script) {
//                 return script;
//             }
//             throw new ApolloError('Script not found', '404');
//         },
//         scripts: async (_parent: any, args: { ownerId: string }): Promise<any> => getCollectionEntities('scripts', ['ownerId', '==', args.ownerId]),
//         executions: async (_parent: any, args: { scriptId: string }): Promise<any> => getCollectionEntities('executions', ['scriptId', '==', args.scriptId]),
//     },
//     User: {
//         devices: async (_parent: any, args: any): Promise<any> =>  getCollectionEntities('devices', ['ownerId', '==', _parent.id]),
//         scripts: async (_parent: any): Promise<any> => getCollectionEntities('scripts', ['ownerId', '==', _parent.id]),
//     },
//     Device: {
//         owner: async (_parent: any, args: any): Promise<any> => {
//             const user = await getCollectionEntity('users', _parent.ownerId);
//             if (user) {
//                 return user;
//             }
//             return null;
//         },
//     },
//     Script: {
//         owner: async (_parent: any): Promise<any> => {
//             const user = await getCollectionEntity('users', _parent.ownerId);
//             if (user) {
//                 return user;
//             }
//             return null;
//         },
//     },
//   };
export default {}