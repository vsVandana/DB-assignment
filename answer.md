1. the relationship between the "Product" and "Product_Category" is established through a foreign key relationship. In the provided database schema, the "Product" entity has a field called "category_id," which serves as a foreign key. This foreign key references the "id" column in the "Product_Category" entity.and this "id" column is primary key of "product_category".

2. So i want to give answer by using mongoDB.so in this table we take a example of "poduct"
  and "product_category".the "Product" and "Product_Category" collections are linked through document references. The "Product" documents include a category field referencing the "_id" of a "Product_Category" document. This ensures each product has a valid category assignment, maintaining data integrity. 





