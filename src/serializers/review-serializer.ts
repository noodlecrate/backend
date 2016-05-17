import { ISerializer } from "./serializer.i";
import { ReviewModel } from "../models/review-model";
import { UserSerializer } from "./user-serializer";

let userSerializer = new UserSerializer();

export class ReviewSerializer
    implements ISerializer<ReviewModel>
{

    public serialize(model: ReviewModel): any {
        return {
            id: model.getId(),
            title: model.getTitle(),
            body: model.getBody(),
            score: model.getScore(),
            imageUrl: model.getImageUrl(),
            author: userSerializer.serialize((<any>model).author)
        };
    }

    public deserialize(json: any): ReviewModel {
        return new ReviewModel(parseInt(json.id), json.title, json.body, json.score, json.imageUrl);
    }

}
