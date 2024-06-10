export const CardType = {
    BAR: 'bar',
    COLUMN: 'column',
    LINE_COLUMN: 'line_column',
    DONUT: 'solidgauge',
    LINE: 'line',
    PIE: 'pie',
    TREE: 'tree',
    STACKED_COLUMN: 'stacked_column',

}
export const PeriodType = {
    DIMENSION: 'dimension',
    FILTER: 'filter',
    YEAR: 'year',
}

export const apiKey = {
    starturl: '/api/analytics.json?dimension=',
    posturl: '&skipRounding=false&filter=ou%3AUSER_ORGUNIT',
    dimesionKey: 'dx:'
}
// export const PostUrl="&skipRounding=false&filter=ou%3AUSER_ORGUNIT"