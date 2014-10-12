console.log('Current cookies value:', document.cookie);

// Define cookies.

document.cookie = "name=Tomas";
document.cookie = "teach=Javascript";
document.cookie = "live=Barcelona;expires=Tue, 14 Oct 2014 01:29:16 GMT";

// To remove a cookie we should force to expire it.

document.cookie="live=Barcelona; expires=Thu, 18 Dec 2013 12:00:00 UTC";