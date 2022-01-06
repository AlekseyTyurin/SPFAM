import {Module} from '@nestjs/common';
import {SparePartsService} from './spare-parts.service';
import {SparePartsController} from './spare-parts.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {SparePartSchema} from './spare-part.model';

@Module({
    imports: [MongooseModule.forFeature([{name: 'SparePart', schema: SparePartSchema}])],
    providers: [SparePartsService],
    controllers: [SparePartsController]
})
export class SparePartsModule {
}
