export interface RoutesProps {
    path: string;
    breadcrumbName: string;
    children?: Omit<RoutesProps, 'children'>[];
}
