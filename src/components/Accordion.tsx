import * as React from 'react';
import { List } from 'react-native-paper';

export const Accordion = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title='Breakfast'
        left={(props) => <List.Icon {...props} icon='food-variant' />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title='First item' />
        <List.Item title='Second item' />
      </List.Accordion>
    </List.Section>
  );
};
