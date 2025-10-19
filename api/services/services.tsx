export interface Solution {
  id: string;
  name: string;
  title_hero: string;
  text_button: string;
  sections: Section[];
}

interface Section {
  title: string;
  cards: Card[];
}

interface Card {
  subtitle: string;
  description: string[];
}

export const getSolutions = async (): Promise<Solution[]> => {
  const url = '/api/solutions';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Solution[] = await response.json();
  return data;
};
