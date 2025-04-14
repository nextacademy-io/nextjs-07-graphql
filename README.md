# Next.js Workshop: First custom hook

In this task you will create your first custom hook: `useProfileUrlsRoundRobin()`.

The idea is to extract some logic from the `Home` component (related to the `PictureUrl` round robin functionality) into a reusable, custom hook.

```tsx
const { pictureUrl, prevPictureUrl, nextPicture } = useProfileUrlsRoundRobin(
  0, // min index
  99, // max index
  (i) => `https://randomuser.me/api/portraits/men/${i}.jpg`,
  0, // initial index in range [min .. max], optional, min default
);
```

## 1. Create the `useProfileUrlsRoundRobin` files.

Create a folder structure like this:

```
src/hooks/use-profile-urls-round-robin
├── index.ts
├── use-profile-urls-round-robin.test.tsx
└── use-profile-urls-round-robin.tsx
```

## 2. Implement the `useProfileUrlsRoundRobin` hook.

```tsx
const { pictureUrl, prevPictreUrl, nextPicture } = useProfileUrlsRoundRobin(
  0, // min index
  99, // max index
  (i) => `https://randomuser.me/api/portraits/men/${i}.jpg`,
  0, // initial index in range [min .. max], optional, min default
);
```

- `pictureUrl` is a `string`
- `prevPictureUrl` is a `string``
- `nextPicture` is a `() => void`

**Hint:**

```ts
const nextIndex = ((currentIndex + 1) % (maxIndex - minIndex + 1)) + minIndex;
```

Implement `use-profile-urls-round-robin/index.ts`.

## 3. Create tests for the `useProfileUrlsRoundRobin` hook.

`use-profile-urls-round-robin.test.tsx`:

- Test: Hook should return the correct initial values
- Test: Hook should update the picture URL on nextPicture
- Test: Hook should wrap around when reaching the max index

**Hints:**

- You might want to use [renderHook](https://testing-library.com/docs/react-testing-library/api/#renderhook).

```tsx
const { result } = renderHook(() => useMyHook());
```

- The actuall result of your hook is in `result.current`.
- Wrap any function calls (that affect the react components lifecycle) in [act](https://react.dev/reference/react/act)

```tsx
act(() => {
  result.current.myFunctionCall();
});
```

- Consider **AAA**: **A**rrange, **A**ct, **A**ssert.

## 4. Use your hook in `app/page.tsx`

Refactor your `Home` component. Use the newly created custom hook.

## 5. Fix any Regressions

You might have regressions (failing tests in `app/page.test.tsx`).

Adjust your implementation in `app/page.test.tsx` so that the regressions are resolved.

**Don't adjust the tests!**
