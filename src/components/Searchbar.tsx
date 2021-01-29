import * as React from 'react';
import { Searchbar } from 'react-native-paper';

export const SearchbarComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <>
      {/* @ts-ignore */}
      <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </>
  );
};
