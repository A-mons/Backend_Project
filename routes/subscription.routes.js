import {Router}  from 'express';


const subscriptionRouter = Router();

subscriptionRouter.get('/',  ( req, res ) => res.send( {title : 'Get all subscriptions '} ))

subscriptionRouter.get('/:id',  ( req, res ) => res.send( {title : 'Get a subscription  '} ))

subscriptionRouter.post('/',  ( req, res ) => res.send( {title : 'Create  a subscription '} ))

subscriptionRouter.put('/:id',  ( req, res ) => res.send( {title : 'Update a subscription '} ))

subscriptionRouter.delete('/:id',  ( req, res ) => res.send( {title : 'Delete  subscription '} ))

subscriptionRouter.get('/user/:id',  ( req, res ) => res.send( {title : 'get user subscriptions '} ))

subscriptionRouter.put('/:id/cancel',  ( req, res ) => res.send( {title : 'cancel user subscription '} ))



export default subscriptionRouter;