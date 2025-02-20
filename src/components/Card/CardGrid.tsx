import { ReactNode } from "react"
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from "../Loader/Loader";

export interface ICardGrid {
  children: ReactNode;
  loadMore: () => void;
  dataLength: number
  isLoading: boolean
}

export const CardGrid = (props: ICardGrid) => {
  const { children, loadMore, dataLength = Infinity, isLoading } = props;

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <InfiniteScroll loader={<Loader />} hasMore next={loadMore} dataLength={dataLength}>
      <div className="container mx-auto grid grid-cols-1 gap-4 p-4 snap-both snap-proximity">
        {children}
      </div>
    </InfiniteScroll>
  )

}
