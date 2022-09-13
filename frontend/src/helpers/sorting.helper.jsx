/**
 * sort paintings by sortingNumber
 */

export const mergeSort = (bestOf) => {
    if (bestOf?.length < 2) {
        return;
    }
    var mid = parseInt(bestOf?.length / 2, 10);
    var arrayLeft = [mid];
    var arrayRight = [bestOf?.length - mid];

    for (var i = 0; i < mid; i++) {
        arrayLeft[i] = bestOf[i];
    }
    for (var j = mid; j < bestOf?.length; j++) {
        arrayRight[j - mid] = bestOf[j];
    }
    mergeSort(arrayLeft, mid);
    mergeSort(arrayRight, bestOf?.length - mid);

    merge(bestOf, arrayLeft, arrayRight, mid, bestOf?.length - mid);
};

export const merge = (bestOf, l, r, left, right) => {
    var i = 0, j = 0, k = 0;
    while (i < left && j < right) {
        if (l[i].sortingNumber <= r[j].sortingNumber) {
            bestOf[k++] = l[i++];
        }
        else {
            bestOf[k++] = r[j++];
        }
    }
    while (i < left) {
        bestOf[k++] = l[i++];
    }
    while (j < right) {
        bestOf[k++] = r[j++];
    }
};