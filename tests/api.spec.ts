
import { test, expect } from '@playwright/test';

test('GET API returns a successful response', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
  expect(body.title).toBeTruthy();
});

test('GET API returns 404 for a missing resource', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/999999'
  );

  expect(response.status()).toBe(404);
});

test('POST API creates a new resource', async ({ request }) => {
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Playwright QA Test',
        body: 'Testing API automation',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(201);

  const body = await response.json();

  expect(body.title).toBe('Playwright QA Test');
  expect(body.body).toBe('Testing API automation');
  expect(body.userId).toBe(1);
  expect(body.id).toBeDefined();
});

test('PUT API updates a resource', async ({ request }) => {
  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: 'Updated with Playwright',
        body: 'API automation testing',
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('Updated with Playwright');
  expect(body.id).toBe(1);
});

test('DELETE API removes a resource', async ({ request }) => {
  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);
});
