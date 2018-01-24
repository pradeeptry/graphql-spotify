const RecommendationsResponse = `
    type RecommendationsResponse {
        seeds: [RecommendationsSeedObject]
        """
        An array of track object (simplified) ordered according to the parameters supplied
        """
        tracks: [Track]
    }
`;

export default RecommendationsResponse