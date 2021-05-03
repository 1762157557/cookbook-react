const hotcate=require('./cookbook-hotcat.json')
const list=require('./cookbook-list.json')
const category=require('./cookbook-category.json')


module.exports=()=>
{
  return {
    hotcate,
    list,
    category
  }
}