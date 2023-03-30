// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

(function ScopeWrapper($) {

    $(function onDocReady() {
        $('#TryItNowForm').submit(TINURLGenCall);
    });

    var invokeurl = ""

    function TINURLGenCall(event) {
        var name = $('#nameInputTIN').val();
        var email = $('#emailInputTIN').val();
        event.preventDefault();
        $.ajax({
            method: 'POST',
            crossDomain: true,
            url: invokeurl + '/tin',
            data: JSON.stringify({
                'name': name,
                'email': email
            }),
            contentType: 'application/json',
            success: function (response, status) {
                console.log('Status: ' + status + '. ');
                console.log('API Gateway call was successful, redirecting to AS2 Streaming URL.');
                window.location.href = response.Message;
            },
            error: function (response, status) {
                console.log('Status: ' + status + '.');
                console.log(response);
                alert('Amazon API Gateway can’t process the request right now because of an internal error. Try again later.');
            }
        });
    }
}(jQuery));
