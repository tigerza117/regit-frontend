<script lang="ts">
    import Login from "./routes/Login.svelte";
    import Home from "./routes/Home.svelte";
    import { Route, Router } from "svelte-navigator";
    import PublicRoute from "./routes/PublicRoute.svelte";
    import PrivateRoute from "./routes/PrivateRoute.svelte";
    import { useProfile } from "./services";
    import { isLogin } from "./stores/auth";

    const profile = useProfile();

    $: if ($profile.isSuccess) {
        isLogin.set(true);
    }
</script>

<div class="h-full min-h-screen min-w-full">
    <div class="mx-auto min-h-screen w-full bg-white">
        {#if $profile.isLoading}
            Loading...
        {:else}
            <Router>
                <PublicRoute path="/auth/*">
                    <Route path="login" component={Login} />
                </PublicRoute>

                <PrivateRoute path="/*">
                    <Route path="" component={Home} />
                </PrivateRoute>
            </Router>
        {/if}
    </div>
</div>
