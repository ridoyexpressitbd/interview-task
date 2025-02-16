"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const store_route_1 = require("../modules/store/store.route");
const domain_route_1 = require("../modules/domain/domain_route");
const routers = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/stores',
        route: store_route_1.StoreRoutes
    },
    {
        path: '/domains',
        route: domain_route_1.DomainRoutes
    }
];
moduleRoutes.forEach(route => {
    routers.use(route.path, route.route);
});
exports.default = routers;
