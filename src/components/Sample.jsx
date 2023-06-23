 import React from 'react'
 
 export const Sample = () => {
   return (
    <span>
    <span>
    <>market Rank</>
    <span>{data?.market_cap_rank}</span>
  </span>
  <span>
    <>watchlist_portfolio_users</>
    <span>{data?.watchlist_portfolio_users}</span>
  </span>
  <span>
  <>public_interest_score</>
  <span>{(data?.public_interest_score)*100 + "%"}</span>
  </span>
  <span>
    <>liquidity_score</>
    <span>{data?.liquidity_score}</span>
  </span>
  <span>
    <>sentiment_up_percentage</>
    <span>{data?.sentiment_votes_up_percentage + "%"}</span>
  </span>
  <span>
    <>sentiment_down_percentage</>
    <span>{data?.sentiment_votes_down_percentage + "%"}</span>
  </span>
  </span>
   )
 }
 