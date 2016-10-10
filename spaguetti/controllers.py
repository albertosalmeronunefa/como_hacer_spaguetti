# -*- coding: utf-8 -*-
from openerp import http

# class Spaguetti(http.Controller):
#     @http.route('/spaguetti/spaguetti/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/spaguetti/spaguetti/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('spaguetti.listing', {
#             'root': '/spaguetti/spaguetti',
#             'objects': http.request.env['spaguetti.spaguetti'].search([]),
#         })

#     @http.route('/spaguetti/spaguetti/objects/<model("spaguetti.spaguetti"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('spaguetti.object', {
#             'object': obj
#         })