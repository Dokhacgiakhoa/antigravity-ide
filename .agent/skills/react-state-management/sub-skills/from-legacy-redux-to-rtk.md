# From Legacy Redux to RTK

```typescript
// Before (legacy Redux)
const ADD_TODO = 'ADD_TODO'
const addTodo = (text) => ({ type: ADD_TODO, payload: text })
function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload, completed: false }]
    default:
      return state
  }
}

// After (Redux Toolkit)
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // Immer allows "mutations"
      state.push({ text: action.payload, completed: false })
    },
  },
})
```

## Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [Jotai Documentation](https://jotai.org/)
- [TanStack Query](https://tanstack.com/query)