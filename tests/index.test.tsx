import { expect, test } from '@rstest/core';
// import { SearchForm } from '../src/SearchForm/index';
import { formatTime } from '../src/utils/format';

test('should test formatTime utils', async () => {
  // render(<SearchForm backgroundColor="#ccc" label="Demo Button" />);
  // const button = screen.getByText('Demo Button');
  expect(formatTime('2025-08-21 00:00:00', 'Y-M-D')).toBe('2025-08-21');
});

// import { render, screen } from '@testing-library/react';
// import { expect, test } from 'vitest';
// import { Button } from '../src/Button';

// test('The button should have correct background color', async () => {
//   render(<Button backgroundColor="#ccc" label="Demo Button" />);
//   const button = screen.getByText('Demo Button');
//   expect(button).toHaveStyle({
//     backgroundColor: '#ccc',
//   });
// });
