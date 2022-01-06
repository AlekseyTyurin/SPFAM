import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {SparePart} from './spare-part.model';

@Injectable()
export class SparePartsService {
    private spareParts: SparePart[] = [];

    constructor(@InjectModel('SparePart') private readonly sparePartModel: Model<SparePart>) {

    }

    async insertSparePart(title: string, desc: string, price: number) {
        const newSparePart = new this.sparePartModel({
            title,
            description: desc,
            price
        });
        const result = await newSparePart.save();
        return result.id as string;
    }

    async getSpareParts() {
        const spareParts = await this.sparePartModel.find().exec();
        return spareParts.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
            price: item.price
        }));
    }

    async getSingleSparePart(productId: string) {
        const sparePart = await this.findSparePart(productId);
        return {id: sparePart.id, title: sparePart.title, description: sparePart.description, price: sparePart.price};

    }

    async updateSparePart(productId: string, title: string, desc: string, price: number) {
        const updatedSparePart = await this.findSparePart(productId);
        if (title) {
            updatedSparePart.title = title;
        }
        if (desc) {
            updatedSparePart.description = desc;
        }
        if (price) {
            updatedSparePart.price = price;
        }
        updatedSparePart.save();
    }

    async deleteSparePart(spareId: string) {
        await this.sparePartModel.deleteOne({_id: spareId}).exec()
    }

    private async findSparePart(id: string): Promise<any> {
        let sparePart;
        try {
           sparePart = await this.sparePartModel.findById(id).exec();
        } catch(error) {
            throw new NotFoundException('Could not find spare part.');
        }
        if (!sparePart) {
            throw new NotFoundException('Could not find spare part.');
        }
        return sparePart;
    }

}
