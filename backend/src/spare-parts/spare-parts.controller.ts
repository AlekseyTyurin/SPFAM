import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { SparePartsService } from './spare-parts.service';

@Controller('spare-parts')
export class SparePartsController {
  constructor(private readonly sparePartsService: SparePartsService) {}

  @Post()
  addSparePart(
    @Body('title') spareTitle: string,
    @Body('description') spareDesc: string,
    @Body('price') sparePrice: number,
  ): any {
    const generatedId = this.sparePartsService.insertSparePart(
      spareTitle,
      spareDesc,
      sparePrice,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllSpareParts() {
    return await this.sparePartsService.getSpareParts();
  }

  @Get(':title')
  async getSearchSpareParts(@Param('title') searchQuery: string) {
    return await this.sparePartsService.getSearchSpareParts(searchQuery);
  }

  // @Get(':id')
  // getSparePart(@Param('id') prodId: string) {
  //   return this.sparePartsService.getSingleSparePart(prodId);
  // }

  @Patch(':id')
  async updateSparePart(
    @Param('id') spareId: string,
    @Body('title') spareTitle: string,
    @Body('description') spareDesc: string,
    @Body('price') sparPrice: number,
  ) {
    await this.sparePartsService.updateSparePart(
      spareId,
      spareTitle,
      spareDesc,
      sparPrice,
    );
    return null;
  }

  @Delete(':id')
  async removeSparePart(@Param('id') spareId: string) {
    await this.sparePartsService.deleteSparePart(spareId);
    return null;
  }
}
