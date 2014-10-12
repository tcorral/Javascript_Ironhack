(function () {
    'use strict';
    var oContainer = document.getElementById('container'),
        nRows = 1000,
        nColumns = 1000,
        oRow,
        oColumn,
        nIndexRow,
        nIndexColumn;

    function createTable() {
        var nEnd,
            nStart = window.performance.now(),
            oTable = document.createElement('table');

        for (nIndexRow = 0; nIndexRow < nRows; nIndexRow++) {
            oRow = document.createElement('tr');
            oTable.appendChild(oRow);
            for (nIndexColumn = 0; nIndexColumn < nColumns; nIndexColumn++) {
                oColumn = document.createElement('td');
                oColumn.innerHTML = nIndexRow + ':' + nIndexColumn;
                oRow.appendChild(oColumn);
            }
        }
        oContainer.appendChild(oTable);
        nEnd = window.performance.now() - nStart;
        console.log( nEnd );
    }

    document.getElementById('add').addEventListener('click', function () {
        createTable();
    }, false);
}());