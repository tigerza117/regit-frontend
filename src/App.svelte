<script>

  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
  import Render from "./Render.svelte";
    const queryClient = new QueryClient()
</script>

<link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
/>
<QueryClientProvider client={queryClient}>
  <Render />
</QueryClientProvider>