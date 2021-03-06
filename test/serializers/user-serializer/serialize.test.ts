/// <reference path="../../../typings/index.d.ts" />

import { UserSerializer } from '../../../src/serializers/user-serializer';
import { UserModel } from "../../../src/models/user-model";

const test = require('modunit');

test('id is serialized correctly', (t, inputId) => {

    let serializer = new UserSerializer();
    let model = new UserModel(inputId, 'joe.bloggs', 'Joe', 'Bloggs');
    let json = serializer.serialize(model);

    t.assert.equal(inputId, json.id);

}, [
    [ 5 ],
    [ 20 ],
    [ 256 ]
]);

test('username is serialized correctly', (t, inputUsername) => {

    let serializer = new UserSerializer();
    let model = new UserModel(1, inputUsername, 'Joe', 'Bloggs');
    let json = serializer.serialize(model);

    t.assert.equal(inputUsername, json.username);

}, [
    [ 'joe.bloggs' ],
    [ 'rude-kid-101' ],
    [ 'aye_caramba' ]
]);

test('first name is serialized correctly', (t, inputFirstName) => {

    let serializer = new UserSerializer();
    let model = new UserModel(1, 'joe.bloggs', inputFirstName, 'Bloggs');
    let json = serializer.serialize(model);

    t.assert.equal(inputFirstName, json.firstName);

}, [
    [ 'Joe' ],
    [ 'Aaron' ],
    [ 'Louis' ]
]);

test('last name is serialized correctly', (t, inputLastName) => {

    let serializer = new UserSerializer();
    let model = new UserModel(1, 'joe.bloggs', 'Joe', inputLastName);
    let json = serializer.serialize(model);

    t.assert.equal(inputLastName, json.lastName);

}, [
    [ 'Smith' ],
    [ 'Wright' ],
    [ 'Andrews' ]
]);
