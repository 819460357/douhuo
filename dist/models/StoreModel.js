"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
// @ts-ignore
let StoreModel = class StoreModel {
};
__decorate([
    typeorm_1.Column({
        type: 'int',
        length: 11
    }),
    __metadata("design:type", Number)
], StoreModel.prototype, "_modify_time", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        length: 11
    }),
    __metadata("design:type", Number)
], StoreModel.prototype, "modify_user_id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        length: 11
    }),
    __metadata("design:type", Number)
], StoreModel.prototype, "_create_time", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int',
        length: 11
    }),
    __metadata("design:type", Number)
], StoreModel.prototype, "_create_user_id", void 0);
__decorate([
    typeorm_1.PrimaryColumn({
        type: 'int',
        length: 11,
        generated: true
    }),
    __metadata("design:type", Number)
], StoreModel.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'tinyint',
        length: 1
    }),
    __metadata("design:type", Number)
], StoreModel.prototype, "is_delete", void 0);
__decorate([
    typeorm_1.Column({
        type: 'tinyint',
        length: 1
    }),
    __metadata("design:type", Number)
], StoreModel.prototype, "is_active", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50
    }),
    __metadata("design:type", String)
], StoreModel.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 4
    }),
    __metadata("design:type", Number)
], StoreModel.prototype, "sex", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StoreModel.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StoreModel.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StoreModel.prototype, "nick", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StoreModel.prototype, "wechat_open_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StoreModel.prototype, "wechat_nickname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StoreModel.prototype, "wechat_sex", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StoreModel.prototype, "wechat_headimgurl", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StoreModel.prototype, "wechat_headimg_md5", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], StoreModel.prototype, "memo", void 0);
StoreModel = __decorate([
    typeorm_1.Table()
], StoreModel);
exports.StoreModel = StoreModel;
//# sourceMappingURL=StoreModel.js.map