import { DocumentElement } from '@keystatic/core';

import { RelatedInfoProps } from '@/components/related-info/related-info.types';

export type DesignSectionProps = { content: DocumentElement[]; title: string };

export type DesignContentProps = {
  description?: string;
  designSections?: DesignSectionProps[];
  relatedComponents?: RelatedInfoProps['relatedComponents'];
};