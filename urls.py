from django.conf.urls import patterns, include, url
from django.contrib import admin

from dashing.utils import router

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'trello_dashboard.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    #url(r'^dashboard/', include('dashing.urls')),
    url(r'^dashboard/', include(router.urls)),
    #url(r'^dashboard/', include('dashing.urls')),
)

