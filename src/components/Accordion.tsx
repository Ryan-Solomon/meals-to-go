import * as React from 'react';
import { List } from 'react-native-paper';

type TAccordionCategories = 'breakfast' | 'lunch' | 'dinner' | 'drinks';

const categories: ['breakfast', 'lunch', 'dinner', 'drinks'] = [
  'breakfast',
  'lunch',
  'dinner',
  'drinks',
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
    <>
      {/* @ts-ignore */}
      <List.Section>
        {categories.map((category) => {
          return (
            <List.Accordion
              key={category}
              title={category[0].toUpperCase() + category.slice(1)}
              left={(props) => <List.Icon {...props} icon='food-variant' />}
              expanded={expanded[category]}
              onPress={() => handlePress(category)}
            >
              {/* @ts-ignore */}
              <List.Item title='First item' />
              {/* @ts-ignore */}
              <List.Item title='Second item' />
            </List.Accordion>
          );
        })}
      </List.Section>
    </>
  );
};
