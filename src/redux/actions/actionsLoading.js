export const actionsLoading = {
    loading : "LOADING"
}

export const setIsLoading = (isLoading) => ({
    type: actionsLoading.loading,
    payload: isLoading
})

