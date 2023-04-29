export type Hit = {
  created_at: string;
  title: string;
  url: any;
  author: string;
  points: number;
  story_text: string;
  comment_text: any;
  num_comments: number;
  story_id: any;
  story_title: any;
  story_url: any;
  parent_id: any;
  created_at_i: number;
  _tags: string[];
  objectID: string;
  _highlightResult: {
    title: {
      value: string;
      matchLevel: string;
      matchedWords: any[];
    };
    author: {
      value: string;
      matchLevel: string;
      matchedWords: any[];
    };
    story_text: {
      value: string;
      matchLevel: string;
      matchedWords: any[];
    };
  };
};
