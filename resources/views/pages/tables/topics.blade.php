<div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Тема</th>
                  <th>Последнее сообщение</th>
                  <th>Автор</th>
                  <th>Дата</th>
                </tr>
              </thead>
              @foreach($result as $comment)
                <tbody>
                <tr>
                  <td><a href="/posts/{{ $comment['id'] }}">{{ $comment['name'] }}</a></td>
                  <td>{!! $comment['last_comment'] !!}</td>
                  <td>{{ $comment['author'] }}</td>
                  <td>{{ $comment['created_at']->toFormattedDateString() }}</td>
                </tr>
              </tbody>
              @endforeach
            </table>
          </div>