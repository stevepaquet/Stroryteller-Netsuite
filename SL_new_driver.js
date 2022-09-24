/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */

define(['N/search', 'N/ui/serverWidget', 'N/https', 'N/runtime', 'N/query', 'N/record', 'N/log', 'N/file', 'N/task', 'N/format', 'N/email', 'N/currentRecord', 'N/search'],

    function(search, serverWidget, https, runtime, query, record, log, file, task, format, email, currentRecord, search) {

        function onRequest(context) {

           var response = {"restletid":58,"token":"hhhtoken","image":"later an image steve"};
           context.response.write(JSON.stringify(response));

        } //function onRequest(context) {
        return {
            onRequest: onRequest
        };

    });