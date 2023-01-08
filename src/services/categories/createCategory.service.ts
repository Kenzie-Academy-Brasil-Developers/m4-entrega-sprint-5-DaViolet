import AppDataSource from "../../data-source";
import Category from "../../entities/category.entities";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";
import { categorySerializer } from "../../serializers/category.serializer";

const createCategoryService = async (categoryData: ICategoryRequest) => {
	const categoryRepository = AppDataSource.getRepository(Category)

	const foundCategory = await categoryRepository .createQueryBuilder("categories").where("name = :name", { name: categoryData.name }).getOne()

	if (foundCategory) {
		throw new AppError("Category already exist.", 409);
	} else {
	const createdCategory = categoryRepository.create(categoryData);

    const categoryValidated = await categorySerializer.validate(createdCategory, {
        stripUnknown: true
    })
    await categoryRepository.save(categoryValidated);

	return categoryValidated;
}
};

export default createCategoryService;
