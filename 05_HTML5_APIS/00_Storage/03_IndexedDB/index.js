/**
 * Database name
 * Version
 */
// Open a database asyncrhonously
var db;
var request = indexedDB.open("MyTestDatabase", 1);

// Set callbacks opening database
// Error handler opening database
request.onerror = function(event) {
  console.log('Something goes wrong using IndexedDB.');
};
// Success handler after open database successfully.
request.onsuccess = function(event) {
  db = request.result;
};
// Callback to execute if the database has changed of version
// When we change the version maybe is because we have changed our
// set of data objects.
request.onupgradeneeded = function (event){
  var db = event.target.result;

  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique.
  var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
  objectStore.createIndex("name", "name", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
  objectStore.createIndex("email", "email", { unique: true });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  objectStore.transaction.oncomplete = function(event) {
    // Store values in the newly created objectStore.
    var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
    for (var i in customerData) {
      customerObjectStore.add(customerData[i]);
    }
  }
};
