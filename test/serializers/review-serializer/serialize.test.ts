/// <reference path="../../../typings/main.d.ts" />

import { ReviewSerializer } from '../../../src/serializers/review-serializer';
import { ReviewModel } from "../../../src/models/review-model";

const test = require('modunit');

test('id is serialized correctly', (t, inputId) => {

    let serializer = new ReviewSerializer();
    let model = new ReviewModel(inputId, 'test title', 'test body', 100.00);
    let json = serializer.serialize(model);

    t.assert.equal(inputId, json.id);

}, [
    [ 5 ],
    [ 20 ],
    [ 256 ]
]);

test('title is serialized correctly', (t, inputTitle) => {

    let serializer = new ReviewSerializer();
    let model = new ReviewModel(1, inputTitle, 'test body', 100.00);
    let json = serializer.serialize(model);

    t.assert.equal(inputTitle, json.title);

}, [
    [ 'some title' ],
    [ 'best noodles ever' ],
    [ 'another great review title' ]
]);
