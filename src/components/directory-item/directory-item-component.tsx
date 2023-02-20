import { FC } from 'react';
import { DirectoryCategory } from '../directory/directory-component';
import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item-styles';

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  return(
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body to={route}>
          <h2>{title}</h2>
          <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;