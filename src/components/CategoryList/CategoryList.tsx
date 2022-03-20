import CategoryItem from './CategoryItem'
import * as S from './styles.list'
import { PostsSortingContext } from 'contexts/PostsSortingContext'
import { useContext } from 'react'

const CategoryList = () => {
  const { categories, selected } = useContext(PostsSortingContext)

  return (
    <S.Container>
      <S.Title>Tags</S.Title>
      <S.SubContainer>
        {categories.map(([category, count]) => (
          <CategoryItem
            key={category}
            name={category}
            count={count}
            isActive={selected === category ? true : false}
          />
        ))}
      </S.SubContainer>
    </S.Container>
  )
}

export default CategoryList
