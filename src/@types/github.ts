import { AxiosResponse } from "axios"

export interface GitHubProps extends AxiosResponse {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string | number,
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    name: string
    company: string
    blog: string
    location: string
    email: null | string,
    hireable: boolean
    bio: string
    twitter_username: null | string,
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
}