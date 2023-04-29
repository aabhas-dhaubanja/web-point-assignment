export type Response<T> = {
  data: {
    hits: T[];
    nbHits: number;
    page: number;
    nbPages: number;
    hitsPerPage: number;
    exhaustiveNbHits: boolean;
    exhaustiveTypo: boolean;
    exhaustive: {
      nbHits: boolean;
      typo: boolean;
    };
    query: string;
    params: string;
    processingTimeMS: number;
    processingTimingsMS: {
      afterFetch: {
        total: number;
      };
      request: {
        roundTrip: number;
      };
      total: number;
    };
    serverTimeMS: number;
  };
};
