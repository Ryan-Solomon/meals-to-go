import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

type TAccordionCategories = 'breakfast' | 'lunch' | 'dinner' | 'drinks';

const categories: {
  name: TAccordionCategories;
  icon: string;
  listItems: string[];
}[] = [
  {
    name: 'breakfast',
    icon: 'food-variant',
    listItems: ['whatever 1', 'whatever 2'],
  },
  {
    name: 'lunch',
    icon: 'food-fork-drink',
    listItems: ['whatever 1', 'whatever 2'],
  },
  {
    name: 'dinner',
    icon: 'food',
    listItems: ['whatever 1', 'whatever 2'],
  },
  {
    name: 'drinks',
    icon: 'cup',
    listItems: ['whatever 1', 'whatever 2'],
  },
];

export const Accordion = () => {
  const [expanded, setExpanded] = React.useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    drinks: false,
  });

  const handlePress = (category: TAccordionCategories) =>
    setExpanded({ ...expanded, [category]: !expanded[category] });

  return (
    <ScrollView>
      {/* @ts-ignore */}
      <List.Section>
        {categories.map((category) => {
          return (
            <List.Accordion
              key={category.name}
              title={category.name[0].toUpperCase() + category.name.slice(1)}
              left={(props) => <List.Icon {...props} icon={category.icon} />}
              expanded={expanded[category.name]}
              onPress={() => handlePress(category.name)}
            >
              {category.listItems.map((item) => {
                return (
                  <View key={item}>
                    {/* @ts-ignore */}
                    <List.Item title={item} />
                  </View>
                );
              })}
            </List.Accordion>
          );
        })}
      </List.Section>
    </ScrollView>
  );
};
