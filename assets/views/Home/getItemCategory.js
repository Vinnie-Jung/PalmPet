import categoryData from '../../api/category.json';

export default function getItemCategory(item) {
    let count = 0;
    while (categoryData[count].id !== item) {
      count++;
    }
    return categoryData[count].name;
}