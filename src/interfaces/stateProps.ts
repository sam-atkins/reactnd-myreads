export interface StateProps {
  books?: [
    {
      allowedAnonLogging: boolean;
      authors: string[];
      averageRating: number;
      canonicalVolumeLink: string;
      categories: string[];
      contentVersion: string;
      description: string;
      id: string;
      imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
      };
      industryIdentifiers: {
        identifier: string;
        type: string;
      };
      infoLink: string;
      language: string;
      maturityRating: string;
      pageCount: number;
      panelizationSummary: {
        containsEpubBubbles: boolean;
        containsImageBubbles: boolean;
      };
      previewLink: string;
      printType: string;
      publishedDate: string;
      publisher: string;
      ratingsCount: number;
      readingModes: {
        text: boolean;
        image: boolean;
      };
      shelf: string;
      subtitle: string;
      title: string;
    }
  ];
  shelves?: [
    {
      id: string;
      shelfName: string;
    }
  ];
}
